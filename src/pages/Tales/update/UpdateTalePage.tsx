import { useTaleMutation } from "../../../hooks/useTaleMutation";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import type { Story, TaleProp } from "../../../types/tales";
import { auth } from "../../../libs/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useTaleIDMutation } from "../../../hooks/useTaleIDMutation";
import { useTaleIDQuery } from "../../../hooks/useTaleIDQuery";
import { useEffect } from "react";

type FormFields = {
    title: string;
    description: string;
    story: Story[]
}

const UpdateTalePage = () => {
    const { taleID } = useParams<TaleProp>();
    if(!taleID) throw new Error("taleID is missing");
    const { data: tale, isError, isLoading  } = useTaleIDQuery({taleID})
    const stories = tale?.Story

    const { mutateAsync } = useTaleIDMutation()
    const navigate = useNavigate();
    const {control, register, handleSubmit, setError, reset } = useForm<FormFields>()

    useEffect(() =>{
        if(tale){
            reset({
                title: tale.Title,
                description: tale.Description,
                story: tale.Story,
            })
        }
    },[tale])

    const { fields, append, insert, remove } = useFieldArray({
        control,
        name: 'story'
    })
    const createTopic = () =>{
        append({ Topic: '', Message: '' })
    }

    const removeTopic = (index: number) =>{
        remove(index)
    }

    const onSubmit: SubmitHandler<FormFields> = async (formData) =>{
    try {
        const {title, description, story } = formData
        const user = auth.currentUser?.displayName
        await mutateAsync({
            taleID: taleID,
            taleData: {
                Title: title,
                Description: description,
                Story: story,
            }
        })
        alert('Tale updated successfully!');
        navigate('/Tales')
    } catch (err) {
        setError('root',{
        message: 'Error'
        })
    }
    }

    return (
        <div className="min-h-screen pt-20 md:pt-15">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-7">
                <div className="text-center mt-5">
                    <h1 className="text-black text-2xl md:text-4xl">Start Updating your Tale</h1>
                </div>

                <div className="mt-5 text-center">
                    <input {...register('title')} type="text" placeholder='New Tale'
                    className="bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-175 rounded-md"/>
                </div>

                <figure className="max-w-150 mx-auto">
                    <img src={'/placeholder_image.webp'} alt="Image Placeholder" className="rounded-sm" />
                    <textarea {...register('description')} placeholder='Add your description' 
                    className="textarea mt-5 bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-150 rounded-md"/>

                </figure>

                {fields.map((field, index) =>(
                    <div key={field.id} className="flex flex-col items-center space-y-6">
                    <input {...register(`story.${index}.Topic`)} type="text" placeholder='Topic Placeholder text'
                    className="bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-150 rounded-md"
                    />
                    <textarea {...register(`story.${index}.Message`)} placeholder='Message placeholder text' 
                    className="textarea mt-5 bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-150 rounded-md"/>
                    <button type="button" className="btn btn-error" onClick={() => removeTopic(index)}>Remove Topic</button>
                    </div>
                ))}
                
                <div className="flex flex-col items-center space-y-5">
                    <button type="button" className="btn btn-soft btn-wide" onClick={createTopic}>Create Topic</button>
                    <button type="submit" className="btn btn-success btn-wide">Submit Tale</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateTalePage