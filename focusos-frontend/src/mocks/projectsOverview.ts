export interface projectOverview {
    name: string,
    total: number,
    completed: number,
}

export const mockProjectsOverview: projectOverview[] = [
    { name: "FocusOs", total: 24, completed: 8 },
    { name: "PixelUtils", total: 18, completed: 11 },
    { name: "Cue", total: 12, completed: 9 }
];