const API_URL = 'http://localhost:3001'

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  if (response.status === 204) return null
  return response.json()
}

export const api = {
  getTasks: () => request('/tasks?_sort=dueDate'),
  getTask: (id) => request(`/tasks/${id}`),
  createTask: (task) => request('/tasks', { method: 'POST', body: JSON.stringify(task) }),
  updateTask: (id, task) =>
    request(`/tasks/${id}`, { method: 'PATCH', body: JSON.stringify(task) }),
  deleteTask: (id) => request(`/tasks/${id}`, { method: 'DELETE' }),
  getProjects: () => request('/projects'),
  getProject: (id) => request(`/projects/${id}`),
}
