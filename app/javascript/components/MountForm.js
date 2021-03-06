import React from 'react'
import useForm from 'react-hook-form'

export default function MountForm(params) {
  const { setTrigger, trigger, csrf } = params;
  const { register, handleSubmit, watch, errors } = useForm()

  console.log(`name is ${watch('name')}`) // watch input value by passing the name of it
  console.log(`height is ${watch('height')}`) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit((data) => {
	  let response = "";
	  console.log(data);
	  fetch('/mounts.json', {
		  method: 'POST',
		  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrf
                  },		  
		  body: JSON.stringify(data),
	  }).then(() => setTrigger(trigger + 1));
    })
    }>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="name" defaultValue="" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="height" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.height && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  )
}
