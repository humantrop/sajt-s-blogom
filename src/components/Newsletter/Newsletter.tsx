'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setMessage(data.error || 'Doslo je do greske.');
        return;
      }

      setStatus('success');
      setMessage('Uspesno ste se prijavili!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Doslo je do greske. Pokusajte ponovo.');
    }
  };

  return (
    <section className={styles.newsletter}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/newsletter.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2 className={styles.title}>PRIDRUZI NAM SE</h2>
        <p className={styles.subtitle}>Dobijajte najnovije vesti i clanke direktno u inbox</p>

        {status === 'success' ? (
          <p className={styles.successMessage}>{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email adresa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className={styles.button}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'SLANJE...' : 'PRIJAVI SE'}
              </button>
            </div>
            {status === 'error' && (
              <p className={styles.errorMessage}>{message}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
