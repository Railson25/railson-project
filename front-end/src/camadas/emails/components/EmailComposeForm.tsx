import Button from "@/base-components/Button";
import { ClassicEditor } from "@/base-components/Ckeditor";
import { FormInline, FormInput, FormLabel } from "@/base-components/Form";
import TomSelect from "@/base-components/TomSelect";
import fakerData from "@/utils/faker";
import { useState } from "react";
import {
  COMPOSE_EDITOR_CONFIG,
  COMPOSE_INITIAL_CC,
  COMPOSE_INITIAL_EDITOR_DATA,
  COMPOSE_INITIAL_RECIPIENTS,
} from "../constants";

function EmailComposeForm() {
  const [to, setTo] = useState(COMPOSE_INITIAL_RECIPIENTS);
  const [cc, setCc] = useState(COMPOSE_INITIAL_CC);
  const [editorData, setEditorData] = useState(COMPOSE_INITIAL_EDITOR_DATA);

  return (
    <>
      <FormInline className="flex-col items-start 2xl:flex-row gap-y-3 2xl:items-center">
        <FormLabel
          htmlFor="to"
          className="sm:w-20 !text-left 2xl:!text-right"
        >
          To
        </FormLabel>
        <TomSelect
          id="to"
          value={to}
          onChange={setTo}
          className="flex-1 w-full"
          multiple
        >
          {fakerData.map((faker, fakerKey) => (
            <option key={fakerKey} value={faker.users[0].email}>
              {faker.users[0].email}
            </option>
          ))}
        </TomSelect>
      </FormInline>
      <FormInline className="flex-col items-start mt-5 2xl:flex-row gap-y-3 2xl:items-center">
        <FormLabel
          htmlFor="cc"
          className="sm:w-20 !text-left 2xl:!text-right"
        >
          Cc
        </FormLabel>
        <TomSelect
          id="cc"
          value={cc}
          onChange={setCc}
          className="flex-1 w-full"
          multiple
        >
          {fakerData.map((faker, fakerKey) => (
            <option key={fakerKey} value={faker.users[0].email}>
              {faker.users[0].email}
            </option>
          ))}
        </TomSelect>
      </FormInline>
      <FormInline className="flex-col items-start mt-5 2xl:flex-row gap-y-3 2xl:items-center">
        <FormLabel
          htmlFor="mail"
          className="sm:w-20 !text-left 2xl:!text-right"
        >
          Subject
        </FormLabel>
        <FormInput id="mail" type="text" />
      </FormInline>
      <FormInline className="flex-col items-start mt-5 2xl:flex-row gap-y-3 2xl:items-center">
        <FormLabel className="sm:w-20 !text-left 2xl:!text-right">
          Mail
        </FormLabel>
        <div className="flex-1 w-full">
          <ClassicEditor
            value={editorData}
            onChange={setEditorData}
            config={COMPOSE_EDITOR_CONFIG}
          />
        </div>
      </FormInline>
      <div className="mt-5 2xl:ml-20 2xl:pl-5">
        <Button variant="primary" type="button" className="w-24 mr-1">
          Send
        </Button>
        <Button variant="outline-secondary" type="button" className="w-24">
          Cancel
        </Button>
      </div>
    </>
  );
}

export default EmailComposeForm;
