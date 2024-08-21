import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const initialToken = import.meta.env.VITE_GITHUB_TOKEN || '';
import { atomWithStorage } from 'jotai/utils';

export const modalOpenAtom = atom(false);
export const modalContentAtom = atom(null);
export const totalMissionCountAtom = atom(0);
export const issuesAtom = atom([]);
export const tokenAtom = atomWithStorage('githubToken', initialToken);
export const favoritesAtom = atomWithStorage('favorites', []);