import Button from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("button", module).add("Base", () => {
  const root = document.createElement("div");
  const normalButton = new Button({
    className: "sample-class",
    id: "sample-id",
    visible: true,
    disabled: false,
    onClick: e => {
      console.log(["onClick Event", e]);
    }
  });
  const submitButton = new Button({
    text: "Submit",
    type: "submit",
    visible: true,
    disabled: false,
    onClick: e => {
      console.log(["onClick Event", e]);
    }
  });

  const alertButton = new Button({
    text: "Alert",
    type: "alert",
    visible: true,
    disabled: false,
    onClick: e => {
      console.log(["onClick Event", e]);
    }
  });

  const saveButton = new Button({
    text: "Save",
    type: "save",
    visible: true,
    disabled: false,
    onClick: e => {
      console.log(["onClick Event", e]);
    }
  });
  const disabledButton = new Button({
    text: "Save",
    type: "save",
    visible: true,
    disabled: true,
    onClick: e => {
      console.log(["onClick Event", e]);
    }
  });
  root.appendChild(normalButton);
  root.appendChild(submitButton);
  root.appendChild(alertButton);
  root.appendChild(saveButton);
  root.appendChild(disabledButton);
  return root;
});
