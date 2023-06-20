import * as yup from 'yup';

export const goalValidationSchema = yup.object().shape({
  description: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  status: yup.string().required(),
  player_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
});
