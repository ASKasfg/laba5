const { z } = require('zod');

const UserSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  email: z.string().email()
});

test('корректный пользователь проходит валидацию', () => {
  const result = UserSchema.safeParse({ id: 1, name: 'Иван', email: 'ivan@example.com' });
  expect(result.success).toBe(false);
});

test('некорректный id не проходит валидацию', () => {
  const result = UserSchema.safeParse({ id: -1, name: 'Иван', email: 'ivan@example.com' });
  expect(result.success).toBe(false);
});