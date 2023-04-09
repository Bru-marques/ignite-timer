import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
    return (
        <FormContainer>
            <label htmlFor='task'>I'll work on</label>
            <TaskInput />

            <datalist>
                <option value='Project 1' />
                <option value='Project 2' />
                <option value='Project 3' />
                <option value='Project 4' />
            </datalist>

            <label htmlFor='minutesAmount'>duration</label>
            <MinutesAmountInput />
            <span>minutes.</span>
        </FormContainer>
    )
}