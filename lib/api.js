/**
 * API Client for communicating with backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Generic API call function
 * @param {string} endpoint - API endpoint (e.g., '/api/users', '/login')
 * @param {object} options - fetch options
 * @returns {Promise<object>} - response data
 */
export async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add JWT token from localStorage if available
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `API Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

/**
 * Login with username and password
 * @param {string} username - username
 * @param {string} password - password
 * @returns {Promise<object>} - {status, message, token, user}
 */
export async function loginUser(username, password) {
  return apiCall('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}

/**
 * Logout user (remove token from localStorage)
 */
export async function logoutUser() {
  try {
    await apiCall('/logout', { method: 'POST' });
  } catch (error) {
    console.warn('Logout API call failed:', error);
  }
  // Always clear token from localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
}

/**
 * Register new user
 * @param {object} userData - user data {firstname, fullname, lastname, username, password, ...}
 * @returns {Promise<object>} - {status, id, firstname, fullname, lastname, username, status}
 */
export async function registerUser(userData) {
  return apiCall('/api/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

/**
 * Get all users (requires JWT token)
 * @param {object} options - {limit, page}
 * @returns {Promise<object>} - {status, count, data, total, page, limit}
 */
export async function getUsers(options = {}) {
  // For now, don't send limit/page to avoid LIMIT/OFFSET issues
  // const params = new URLSearchParams();
  // if (options.limit) params.append('limit', options.limit);
  // if (options.page) params.append('page', options.page);

  const endpoint = `/api/users`;

  return apiCall(endpoint, { method: 'GET' });
}

/**
 * Get single user by ID (requires JWT token)
 * @param {number} id - user ID
 * @returns {Promise<object>} - {status, data}
 */
export async function getUserById(id) {
  return apiCall(`/api/users/${id}`, { method: 'GET' });
}

/**
 * Update user (requires JWT token)
 * @param {number} id - user ID
 * @param {object} userData - user data to update
 * @returns {Promise<object>} - {status, message}
 */
export async function updateUser(id, userData) {
  return apiCall(`/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  });
}

/**
 * Delete user (requires JWT token)
 * @param {number} id - user ID
 * @returns {Promise<object>} - {status, message}
 */
export async function deleteUser(id) {
  return apiCall(`/api/users/${id}`, { method: 'DELETE' });
}
