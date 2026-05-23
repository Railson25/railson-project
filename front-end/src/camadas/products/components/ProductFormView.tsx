import Button from "@/base-components/Button";
import Dropzone, { type DropzoneElement } from "@/base-components/Dropzone";
import {
  FormCheck,
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
} from "@/base-components/Form";
import Litepicker from "@/base-components/Litepicker";
import Lucide from "@/base-components/Lucide";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { cn } from "../../../../UI/lib/utils";
import {
  buildProductFormData,
  type ProductFormMode,
  productSchema,
  type ProductFormValues,
} from "../schemas/product-schema";

type ProductFormViewProps = {
  mode: ProductFormMode;
  initialValues: ProductFormValues;
  onCancel: () => void;
  onSubmit: (values: ProductFormValues, formData: FormData) => void;
};

const PRODUCT_CATEGORIES = [
  "PC & Laptop",
  "Smartphone & Tablet",
  "Electronic",
  "Home Appliance",
  "Photography",
  "Fashion & Make Up",
  "Kids & Baby",
  "Hobby",
  "Sport & Outdoor",
];

const PRODUCT_STATUS_OPTIONS: ProductFormValues["status"][] = [
  "Active",
  "Inactive",
];

const PRODUCT_CONDITION_OPTIONS: ProductFormValues["condition"][] = [
  "New",
  "Used",
  "Refurbished",
];

const PRODUCT_SIGNAL_STATUS_OPTIONS: ProductFormValues["signalStatus"][] = [
  "Activated",
  "Deactivated",
];

function ProductFormView({
  mode,
  initialValues,
  onCancel,
  onSubmit,
}: ProductFormViewProps) {
  const [dropzoneElement, setDropzoneElement] =
    useState<DropzoneElement | null>(null);

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: yupResolver(productSchema),
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const existingImages = watch("existingImages");
  const uploadedImages = watch("images");

  const dropzoneOptions = useMemo(
    () => ({
      url: "#",
      autoProcessQueue: false,
      uploadMultiple: true,
      addRemoveLinks: true,
      thumbnailWidth: 120,
      maxFilesize: 5,
      acceptedFiles: "image/jpeg,image/png,image/jpg,image/webp",
    }),
    []
  );

  useEffect(() => {
    reset(initialValues);

    if (dropzoneElement?.dropzone) {
      dropzoneElement.dropzone.removeAllFiles(true);
    }
  }, [dropzoneElement, initialValues, reset]);

  useEffect(() => {
    const dropzone = dropzoneElement?.dropzone;

    if (!dropzone) {
      return;
    }

    const syncFiles = () => {
      setValue("images", dropzone.files as File[], {
        shouldDirty: true,
        shouldValidate: true,
      });
    };

    dropzone.on("addedfile", syncFiles);
    dropzone.on("removedfile", syncFiles);
    dropzone.on("reset", syncFiles);

    return () => {
      dropzone.off("addedfile", syncFiles);
      dropzone.off("removedfile", syncFiles);
      dropzone.off("reset", syncFiles);
    };
  }, [dropzoneElement, setValue]);

  const submitForm = (values: ProductFormValues) => {
    const formData = buildProductFormData(values);
    onSubmit(values, formData);
  };

  const removeExistingImage = (image: string) => {
    setValue(
      "existingImages",
      existingImages.filter((currentImage) => currentImage !== image),
      { shouldDirty: true, shouldValidate: true }
    );
  };

  const fieldErrorClass = (hasError: boolean) =>
    hasError ? "border-danger focus:border-danger" : undefined;

  return (
    <div className="mx-auto 3xl:max-w-[1920px]">
      <div className="flex flex-col mt-8 intro-y gap-y-4 md:flex-row md:items-center">
        <div className="mr-auto">
          <h2 className="flex items-center text-lg font-medium">
            Products
            <Lucide icon="ArrowRight" className="w-4 h-4 mx-2 !stroke-2" />
            {mode === "create" ? "Create Product" : "Update Product"}
          </h2>
          <div className="mt-1 text-sm text-slate-500">
            {mode === "create"
              ? "Register a new product in the catalog."
              : "Edit product details and media."}
          </div>
        </div>
        <Button
          type="button"
          variant="outline-secondary"
          className="w-full md:w-auto"
          onClick={onCancel}
        >
          <Lucide icon="ArrowLeft" className="w-4 h-4 mr-2" />
          Back to Products
        </Button>
      </div>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-12 lg:col-span-8">
            <div className="p-5 box intro-y">
              <div className="pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium">Product Information</div>
              </div>

              <div className="grid grid-cols-1 gap-4 xs:grid-cols-2">
                <div className="xs:col-span-2">
                  <FormLabel htmlFor="product-name">Product Name</FormLabel>
                  <FormInput
                    id="product-name"
                    type="text"
                    placeholder="Product name"
                    className={fieldErrorClass(Boolean(errors.name))}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <FormLabel htmlFor="product-category">Category</FormLabel>
                  <FormSelect
                    id="product-category"
                    className={fieldErrorClass(Boolean(errors.category))}
                    {...register("category")}
                  >
                    {PRODUCT_CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </FormSelect>
                  {errors.category && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div>
                  <FormLabel htmlFor="product-price">Price</FormLabel>
                  <FormInput
                    id="product-price"
                    type="text"
                    placeholder="$0.00"
                    className={fieldErrorClass(Boolean(errors.price))}
                    {...register("price")}
                  />
                  {errors.price && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                <div>
                  <FormLabel htmlFor="product-stock">Stock</FormLabel>
                  <FormInput
                    id="product-stock"
                    type="number"
                    min={0}
                    placeholder="0"
                    className={fieldErrorClass(Boolean(errors.stock))}
                    {...register("stock")}
                  />
                  {errors.stock && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.stock.message}
                    </p>
                  )}
                </div>

                <div>
                  <FormLabel htmlFor="product-sku">SKU</FormLabel>
                  <FormInput
                    id="product-sku"
                    type="text"
                    placeholder="INV-000000"
                    className={fieldErrorClass(Boolean(errors.sku))}
                    {...register("sku")}
                  />
                  {errors.sku && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.sku.message}
                    </p>
                  )}
                </div>

                <div>
                  <FormLabel htmlFor="product-release-date">
                    Release Date
                  </FormLabel>
                  <div className="relative">
                    <div className="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                      <Lucide icon="Calendar" className="w-4 h-4" />
                    </div>
                    <Controller
                      name="releaseDate"
                      control={control}
                      render={({ field }) => (
                        <Litepicker
                          id="product-release-date"
                          value={field.value ?? ""}
                          onChange={field.onChange}
                          options={{
                            autoApply: false,
                            format: "DD MMMM YYYY",
                            showWeekNumbers: true,
                            dropdowns: {
                              minYear: 1990,
                              maxYear: null,
                              months: true,
                              years: true,
                            },
                          }}
                          className={cn(
                            "pl-12",
                            fieldErrorClass(Boolean(errors.releaseDate))
                          )}
                        />
                      )}
                    />
                  </div>
                  {errors.releaseDate && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.releaseDate.message}
                    </p>
                  )}
                </div>

                <div>
                  <FormLabel htmlFor="product-brand">Brand</FormLabel>
                  <FormInput
                    id="product-brand"
                    type="text"
                    placeholder="Brand"
                    className={fieldErrorClass(Boolean(errors.brand))}
                    {...register("brand")}
                  />
                  {errors.brand && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.brand.message}
                    </p>
                  )}
                </div>

                <div className="xs:col-span-2">
                  <FormLabel htmlFor="product-description">
                    Description
                  </FormLabel>
                  <FormTextarea
                    id="product-description"
                    rows={6}
                    placeholder="Product description"
                    className={fieldErrorClass(Boolean(errors.description))}
                    {...register("description")}
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="p-5 box intro-y">
              <div className="pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium">Publishing</div>
              </div>

              <div>
                <FormLabel>Status</FormLabel>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <div className="grid grid-cols-1 gap-3 xs:grid-cols-2">
                      {PRODUCT_STATUS_OPTIONS.map((status) => (
                        <FormCheck key={status}>
                          <FormCheck.Input
                            id={`product-status-${status}`}
                            type="radio"
                            name={field.name}
                            value={status}
                            checked={field.value === status}
                            onBlur={field.onBlur}
                            onChange={() => field.onChange(status)}
                          />
                          <FormCheck.Label
                            htmlFor={`product-status-${status}`}
                          >
                            {status}
                          </FormCheck.Label>
                        </FormCheck>
                      ))}
                    </div>
                  )}
                />
                {errors.status && (
                  <p className="mt-1 text-xs text-danger">
                    {errors.status.message}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <FormLabel>Condition</FormLabel>
                <Controller
                  name="condition"
                  control={control}
                  render={({ field }) => (
                    <div className="grid grid-cols-1 gap-3">
                      {PRODUCT_CONDITION_OPTIONS.map((condition) => (
                        <FormCheck key={condition}>
                          <FormCheck.Input
                            id={`product-condition-${condition}`}
                            type="radio"
                            name={field.name}
                            value={condition}
                            checked={field.value === condition}
                            onBlur={field.onBlur}
                            onChange={() => field.onChange(condition)}
                          />
                          <FormCheck.Label
                            htmlFor={`product-condition-${condition}`}
                          >
                            {condition}
                          </FormCheck.Label>
                        </FormCheck>
                      ))}
                    </div>
                  )}
                />
                {errors.condition && (
                  <p className="mt-1 text-xs text-danger">
                    {errors.condition.message}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <FormLabel htmlFor="product-signal-status">
                  Signal Status
                </FormLabel>
                <FormSelect
                  id="product-signal-status"
                  className={fieldErrorClass(Boolean(errors.signalStatus))}
                  {...register("signalStatus")}
                >
                  {PRODUCT_SIGNAL_STATUS_OPTIONS.map((signalStatus) => (
                    <option key={signalStatus} value={signalStatus}>
                      {signalStatus}
                    </option>
                  ))}
                </FormSelect>
                {errors.signalStatus && (
                  <p className="mt-1 text-xs text-danger">
                    {errors.signalStatus.message}
                  </p>
                )}
              </div>
            </div>

            <div className="p-5 mt-5 box intro-y">
              <div className="pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium">Product Images</div>
              </div>

              {existingImages.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-5 xs:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                  {existingImages.map((image) => (
                    <div key={image} className="relative h-20 image-fit">
                      <img
                        alt="Product"
                        className="rounded-md"
                        src={image}
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 flex items-center justify-center w-6 h-6 text-white rounded-full bg-danger"
                        onClick={() => removeExistingImage(image)}
                        aria-label="Remove image"
                      >
                        <Lucide icon="X" className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <Dropzone
                getRef={(el) => {
                  setDropzoneElement(el);
                }}
                options={dropzoneOptions}
              >
                <div className="text-base font-medium">
                  Drop files here or click to upload.
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  JPG, PNG or WEBP. You can select more than one image.
                </div>
              </Dropzone>

              {errors.images && (
                <p className="mt-2 text-xs text-danger">
                  {errors.images.message}
                </p>
              )}

              {uploadedImages.length > 0 && (
                <div className="mt-4 text-sm text-slate-500">
                  {uploadedImages.length} new image
                  {uploadedImages.length > 1 ? "s" : ""} selected.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 mt-5 mb-12 intro-y xs:flex-row xs:justify-end">
          <Button
            type="button"
            variant="outline-secondary"
            className="w-full xs:w-auto"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" className="w-full xs:w-auto">
            <Lucide icon="Save" className="w-4 h-4 mr-2" />
            {mode === "create" ? "Create Product" : "Update Product"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProductFormView;
