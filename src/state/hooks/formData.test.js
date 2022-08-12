import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { useForm } from './formData.js';
import {
  InputControl,
  FormButton,
  SelectControl,
  CheckboxOption,
  TextAreaControl,
  OptionGroupControl,
  RadioOption,
} from '../../components/Forms/FormControls.jsx';

test('InputControl changes based on name', async () => {
  function Test({ onSubmit }) {
    const [data, handleChange] = useForm();
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data);
        }}
      >
        <InputControl
          label="input control"
          name="inputControl"
          value={data.inputControl}
          onChange={handleChange}
        />

        <SelectControl
          label="select control"
          name="selectControl"
          type="number"
          value={data.selectControl}
          onChange={handleChange}
        >
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </SelectControl>

        <CheckboxOption
          text="checkbox text"
          name="checkboxOption"
          value={data.checkboxOption}
          onChange={handleChange}
        />

        <TextAreaControl
          label="textarea control"
          name="textareaControl"
          value={data.textareaControl}
          onChange={handleChange}
        />

        <OptionGroupControl
          label="option group control"
          name="optionGroupControl"
          value={data.OptionGroupControl}
          onChange={handleChange}
        >
          <RadioOption value="1" text="dog" />
          <RadioOption value="2" text="cat" />
          <RadioOption value="3" text="bird" />
        </OptionGroupControl>

        <FormButton />
      </form>
    );
  }

  const user = userEvent.setup();
  const handleSubmit = jest.fn();
  render(<Test onSubmit={handleSubmit} />);

  const input = screen.getByLabelText('input control');
  await user.type(input, 'ic value');

  const selectControl = screen.getByLabelText('select control');
  await user.selectOptions(selectControl, '2');

  const checkboxOption = screen.getByLabelText('checkbox text');
  await user.click(checkboxOption);

  const textarea = screen.getByLabelText('textarea control');
  await user.type(textarea, 'ta value');

  const radioOption = screen.getByLabelText('cat');
  await user.click(radioOption);

  await user.click(screen.getByRole('button'));
  expect(handleSubmit.mock.calls[0][0]).toEqual({
    inputControl: 'ic value',
    selectControl: '2',
    checkboxOption: true,
    textareaControl: 'ta value',
    optionGroupControl: '2',
  });
});
