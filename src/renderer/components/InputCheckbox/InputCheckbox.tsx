interface InputCheckboxProps {
  isChecked: boolean;
  onCheckedInput: (checked: boolean) => void;
}

export function InputCheckbox({
  isChecked,
  onCheckedInput,
}: InputCheckboxProps) {

  function handleChangeCheckbox() {
    onCheckedInput(!isChecked);
  }

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full p-1"
        data-ripple-dark="true"
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:bg-blue-gray-50 checked:border-white checked:bg-white checked:before:bg-pink-500"
          id="checkbox"
          checked={isChecked}
          onChange={handleChangeCheckbox}
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#00B695] opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </label>
    </div>
  );
}
