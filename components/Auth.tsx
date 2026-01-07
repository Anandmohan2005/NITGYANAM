
import React, { useState } from 'react';
import { User, UserRole } from '../types';
import Logo from './Logo';

interface AuthProps {
  onLogin: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Nit1886') {
      onLogin({ username: 'Admin', role: UserRole.ADMIN });
    } else if (username === 'Teacher' && password === 'Child@123') {
      onLogin({ username: 'Teacher', role: UserRole.TEACHER });
    } else {
      setError('Invalid identity credentials. Access denied.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full glass-card p-12 shadow-soft-xl border-white">
        <div className="flex justify-center mb-10">
          <Logo className="w-20 h-20" hideText />
        </div>
        <h2 className="text-3xl font-black text-center text-charcoal mb-2 uppercase tracking-tighter">Gateway Access</h2>
        <p className="text-gray-400 text-center text-[10px] font-black uppercase tracking-[0.3em] mb-12">Faculty & Administration Port</p>
        
        <form onSubmit={handleLogin} className="space-y-8">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-center border border-red-100">
              {error}
            </div>
          )}
          
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Identity ID</label>
            <input 
              type="text" 
              required
              placeholder="Username"
              className="w-full bg-softGray border border-transparent px-8 py-5 rounded-[2rem] focus:bg-white focus:border-gold outline-none text-charcoal font-bold transition-all placeholder:text-gray-300"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Security Pass</label>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full bg-softGray border border-transparent px-8 py-5 rounded-[2rem] focus:bg-white focus:border-gold outline-none text-charcoal font-bold transition-all placeholder:text-gray-300"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-gold text-charcoal font-black py-6 rounded-full shadow-lg hover:shadow-gold/20 transition-all uppercase tracking-[0.2em] text-[11px] mt-6"
          >
            Verify Credentials
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;