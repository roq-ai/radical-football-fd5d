import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  score: yup.number().integer().required(),
  player_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
});
