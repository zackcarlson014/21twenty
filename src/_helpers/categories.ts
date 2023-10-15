export interface Category {
  title: string;
  value: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { title: 'Workout', value: 'workout', icon: 'mdi-weight-lifter' },
  { title: 'Sleep', value: 'sleep', icon: 'mdi-sleep' },
  { title: 'Nutrition', value: 'nutrition', icon: 'mdi-nutrition' },
  { title: 'Meditation', value: 'meditation', icon: 'mdi-meditation' },
  { title: 'Education', value: 'education', icon: 'mdi-book' },
  { title: 'Creativity', value: 'creativity', icon: 'mdi-music' },
  { title: 'Yoga', value: 'yoga', icon: 'mdi-yoga' },
];