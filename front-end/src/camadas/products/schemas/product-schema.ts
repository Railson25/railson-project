import * as yup from "yup";

export const productSchema = yup.object({
  name: yup.string().required("Product name is required"),
  category: yup.string().required("Category is required"),
  price: yup.string().required("Price is required"),
  stock: yup
    .number()
    .typeError("Stock must be a number")
    .min(0, "Stock cannot be negative")
    .required("Stock is required"),
  sku: yup.string().required("SKU is required"),
  releaseDate: yup.string().required("Release date is required"),
  brand: yup.string().required("Brand is required"),
  status: yup
    .mixed<"Active" | "Inactive">()
    .oneOf(["Active", "Inactive"])
    .required("Status is required"),
  condition: yup
    .mixed<"New" | "Used" | "Refurbished">()
    .oneOf(["New", "Used", "Refurbished"])
    .required("Condition is required"),
  signalStatus: yup
    .mixed<"Activated" | "Deactivated">()
    .oneOf(["Activated", "Deactivated"])
    .required("Signal status is required"),
  description: yup.string().required("Description is required"),
  images: yup.array().of(yup.mixed<File>().required()).defined(),
  existingImages: yup.array().of(yup.string().required()).defined(),
});

export type ProductFormValues = yup.InferType<typeof productSchema>;
export type ProductFormMode = "create" | "update";

export const buildProductFormData = (values: ProductFormValues) => {
  const formData = new FormData();

  formData.append("name", values.name);
  formData.append("category", values.category);
  formData.append("price", values.price);
  formData.append("stock", String(values.stock));
  formData.append("sku", values.sku);
  formData.append("releaseDate", values.releaseDate);
  formData.append("brand", values.brand);
  formData.append("status", values.status);
  formData.append("condition", values.condition);
  formData.append("signalStatus", values.signalStatus);
  formData.append("description", values.description);
  formData.append("existingImages", JSON.stringify(values.existingImages));

  values.images.forEach((image) => {
    formData.append("images", image);
  });

  return formData;
};
