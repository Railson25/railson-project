import Button from "@/base-components/Button";
import { FormInput, FormLabel, FormTextarea } from "@/base-components/Form";
import { EVENT_FORM_FIELDS } from "../constants";
import { cn } from "../../../../UI/lib/utils";

function EventFormPanel() {
  return (
    <div className="p-5 box">
      {EVENT_FORM_FIELDS.map((field, index) => (
        <div key={field.id} className={cn(index > 0 && "mt-3")}>
          <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
          {field.type === "textarea" ? (
            <FormTextarea id={field.id} className="w-full" />
          ) : (
            <FormInput
              id={field.id}
              type="text"
              className={cn("w-full", field.inputClassName)}
              data-single-mode={field.id === "date" ? "true" : undefined}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <Button variant="primary" type="button" className="w-full mt-5">
        Save
      </Button>
    </div>
  );
}

export default EventFormPanel;
