export type Links = 'professional-info' | 'personal-info' | 'hobbies';

export type ProfessionalInfoSub = 'experience' | 'hard-skills' | 'soft-skills';

export type ProfessionalInfoContent = 'inklua-2023' | 'inklua-2022' | 'inklua-2021';

export interface CurrentPathState {
  main: Links | string
  sub: ProfessionalInfoSub | string
  content: ProfessionalInfoContent
}