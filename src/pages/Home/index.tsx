import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { HandPalm, Play } from 'phosphor-react';
import { CountDown } from "./components/CountDown";
import { NewCycleForm } from './components/NewCycleForm'
import { CyclesContext } from "../../contexts/CiclesContext";
import { useContext } from "react";
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newCycleFormValidadtionSchema = zod.object({
    task: zod.string().min(1, 'Type the task.'),
    minutesAmount: zod.number()
        .min(5, 'The cycle should take ate least 5 minutes.')
        .max(60, 'The max duration is 60 minutes.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidadtionSchema>

export function Home() {
    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidadtionSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })
    const { handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)
        reset()
    }
    const task = watch('task')
    const isSubmitDisable = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <CountDown />

                {activeCycle ? (
                    <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisable} type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}