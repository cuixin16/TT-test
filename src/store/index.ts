import { create } from 'zustand';

export interface Video {
  id: string;
  title: string;
  description?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  status: 'pending' | 'generating' | 'completed' | 'failed';
  toolType: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  subscriptionTier: 'free' | 'pro';
}

interface AppState {
  user: User | null;
  videos: Video[];
  isGenerating: boolean;
  setUser: (user: User | null) => void;
  addVideo: (video: Video) => void;
  setGenerating: (status: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  videos: [],
  isGenerating: false,
  setUser: (user) => set({ user }),
  addVideo: (video) => set((state) => ({ videos: [video, ...state.videos] })),
  setGenerating: (isGenerating) => set({ isGenerating }),
}));
