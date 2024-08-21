import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const modalOpenAtom = atom(false);
export const modalContentAtom = atom(null);
export const totalMissionCountAtom = atom(0);
export const issuesAtom = atom([]);
export const favoritesAtom = atomWithStorage('favorites', []);