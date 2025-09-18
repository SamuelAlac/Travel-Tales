import { useState } from "react"

type TopicProps = {
    topic: string;
    message: string; 
}

const AddTalePage = () => {

    const [newTopic, setNewTopic] = useState<TopicProps[]>([]);

    const addTopic = () =>{
        setNewTopic((prev) =>[
            ...prev,
            {
                topic: 'New Topic',
                message: 'New Message'
            }
        ])
    }

  return (
    <div className="min-h-screen pt-20 md:pt-15">
        <div className="flex flex-col space-y-7">
            <div className="text-center mt-5">
                <h1 className="text-black text-2xl md:text-4xl">Start Adding your Tale</h1>
            </div>

            <div className="mt-5 text-center">
                <input type="text" placeholder='New Tale'
                className="bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-175 rounded-md"/>
            </div>

            <figure className="max-w-150 mx-auto">
                <img src={'/placeholder_image.webp'} alt="Image Placeholder" className="rounded-sm" />
                <textarea placeholder='Add your description' 
                className="textarea mt-5 bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-150 rounded-md">
                </textarea>

            </figure>

            <div className="text-center">
                <input type="text" placeholder='Topic Placeholder text'
                className="bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-150 rounded-md"
                />
                <p className="text-black text-center">Message placeholder text</p>
            </div>

            {newTopic.map((topic, index) =>(
                <div key={index} className="flex flex-col items-center">
                <input type="text" placeholder='New Topic'
                className="bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-150 rounded-md"
                />
                <textarea placeholder='New Message' 
                className="textarea mt-5 bg-neutral-950/10 focus:bg-neutral-950/10 focus:text-black text-black text-3xl text-center w-150 rounded-md">
                </textarea>
                </div>
            ))}
            
            <div className="text-center">
                <button className="btn btn-soft" onClick={addTopic}>Add Topic</button>
            </div>
        </div>
    </div>
  )
}

export default AddTalePage