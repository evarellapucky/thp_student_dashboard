import { atom } from 'jotai';

export const modalOpenAtom = atom(false);
export const modalContentAtom = atom(null);
export const totalMissionCountAtom = atom(0);
export const issuesAtom = atom([]);