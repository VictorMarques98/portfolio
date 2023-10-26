export type Links = 'professional-info' | 'personal-info' | 'hobbies';

export type ProfessionalInfoSub = 'experience' | 'skills' | 'soft-skills';

export type ProfessionalInfoContent = 'front-end-inklua' | 'front-end-foxbit' | 'front-end-cluster' | 'index.tsx'

export interface CurrentPathState {
  main: Links | string
  sub: ProfessionalInfoSub | string
  content: ProfessionalInfoContent
}