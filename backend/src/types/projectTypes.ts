export interface ProjectType {
    userId: string;
    title: string;
    description: string;
    category: Category;
    imagePath: string;
}

export enum Category {
    Tech = 'Tech',
    Health = 'Health',
    Finance = 'Finance',
    Education = 'Education',
    ECommerce = 'E-commerce',
    Sustainability = 'Sustainability',
    Travel = 'Travel',
    Media = 'Media',
    Gaming = 'Gaming',
    Food = 'Food',
    Other = 'Other',
}
