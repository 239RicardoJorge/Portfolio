export interface Work {
    title: string;
    year: string;
    director: string;
    role: string;
    img: string;
    award: string | null;
    gridClass?: string;
}

export interface ArchiveItem {
    title: string;
    year: string;
    role: string;
    director: string;
    img: string;
    color?: string;
}

export interface Course {
    year: string;
    img: string;
}

export interface PortfolioData {
    selectedWorks: Work[];
    courses: Course[];
    archive: ArchiveItem[];
}

export interface PreviewData {
    img: string;
    role: string;
    director: string;
    active: boolean;
}
