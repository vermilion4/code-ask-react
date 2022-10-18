import Input from "./Input";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import InputIcon from "./InputIcon";

function EmailInput() {
  return (
    <div class="form-wrapper">
      <Label name={"email"} text={"Email"} />
      <Input
        classname={"signup-input"}
        type={"email"}
        id={"email"}
        name={"email"}
        placeholder={"Enter your Email"}
      />

      {/*<!-- <i class="bi bi-exclamation-circle"></i> */}

      <InputIcon classname={"bi"} />
      <ErrorMessage classname={"error-message"} />
    </div>
  );
}
export default EmailInput;
