import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

type ExampleStore={
    exampleValue: string;
    setExampleValue: (value: string) => void;
}


const useExampleStore= create<ExampleStore>()(
    persist(
        (set)=>({
            exampleValue: '',
            setExampleValue: (value: string) => set({ exampleValue: value })
        }),
        {
            name: 'example-storage', 
            storage: createJSONStorage(() => localStorage), 
        })
    )
    
export default useExampleStore;