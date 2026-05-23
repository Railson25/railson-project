import * as yup from "yup";

export const passwordRegex =
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export const registerSchema = yup.object({
  firstName: yup.string().required("Primeiro nome é obrigatório"),
  lastName: yup.string().required("Sobrenome é obrigatório"),

  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),

  password: yup
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .matches(
      passwordRegex,
      "Senha deve ter letra maiúscula, minúscula e número"
    )
    .required("Senha é obrigatória"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("Confirmação de senha é obrigatória"),

  acceptPolicy: yup
    .boolean()
    .transform((value, originalValue) => {
      if (typeof originalValue === "string") {
        return originalValue === "true" || originalValue === "on";
      }
      return value;
    })
    .oneOf([true], "Você precisa aceitar a Privacy Policy"),
});

export type RegisterFormValues = yup.InferType<typeof registerSchema>;
