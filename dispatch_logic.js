/**
 * RapidAid Network — Dispatch Decision Logic
 * Determines response tier based on emergency severity
 */

const SEVERITY = { MINOR: 1, MODERATE: 2, CRITICAL: 3 };

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function nearest(list, lat, lng) {
  return list
    .filter(e => e.available)
    .map(e => ({ ...e, dist_km: haversineKm(lat, lng, e.lat, e.lng) }))
    .sort((a, b) => a.dist_km - b.dist_km)[0] || null;
}

function dispatch(data, emergency) {
  const { lat, lng, severity } = emergency;
  const responder = nearest(data.responders, lat, lng);
  const supportPoint = nearest(data.support_points, lat, lng);
  const ambulance = nearest(data.ambulances, lat, lng);

  const response = { severity, responder: null, support_point: null, ambulance: null };

  if (severity === SEVERITY.MINOR) {
    response.responder = responder;
    response.support_point = supportPoint;
  } else if (severity === SEVERITY.MODERATE) {
    response.responder = responder;
    response.support_point = supportPoint;
    response.ambulance = ambulance;
  } else if (severity === SEVERITY.CRITICAL) {
    response.responder = responder;
    response.ambulance = ambulance;
  }

  return response;
}

module.exports = { dispatch, SEVERITY, haversineKm };
