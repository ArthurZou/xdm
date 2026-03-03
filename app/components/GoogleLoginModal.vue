<template>
  <div class="modal-overlay">
    <div class="modal-card">
      <h2>Sign in to continue</h2>
      <p>You need to sign in to access this page.</p>
      <a href="/auth/google" class="google-btn">
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          width="20"
          height="20"
        />
        Sign in with Google
      </a>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-card {
  background: #fff;
  border-radius: 8px;
  padding: 2rem 2.5rem;
  max-width: 380px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
}

.modal-card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
}

.modal-card p {
  margin: 0 0 1.5rem;
  color: #555;
}

.google-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.4rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
}

.google-btn:hover {
  background: #f5f5f5;
}
</style>
