import { create } from 'zustand';
import { Character } from '../types/domain';
import { loadCharacters, saveCharacters } from '../lib/storage';

interface CharactersState {
  characters: Character[];
  load: () => Promise<void>;
  add: (character: Character) => Promise<void>;
  update: (character: Character) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

export const useCharactersStore = create<CharactersState>((set, get) => ({
  characters: [],
  load: async () => {
    const chars = await loadCharacters();
    set({ characters: chars });
  },
  add: async (character) => {
    const chars = [...get().characters, character];
    set({ characters: chars });
    await saveCharacters(chars);
  },
  update: async (character) => {
    const chars = get().characters.map((c) =>
      c.id === character.id ? character : c,
    );
    set({ characters: chars });
    await saveCharacters(chars);
  },
  remove: async (id) => {
    const chars = get().characters.filter((c) => c.id !== id);
    set({ characters: chars });
    await saveCharacters(chars);
  },
}));
