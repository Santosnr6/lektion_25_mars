function Card() {

    const names = ['Jesper', 'Sebastian', 'Agnes', 'Billy'];

  return (
    <>
        {
            names.map( (name, index) => 
                <div className="card">
                    <h1>Detta är { name } #{ index }</h1>
                    <img src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero a, nihil iusto dolor ipsa eaque beatae ullam labore nesciunt officiis doloribus id aperiam? Quae!</p>
                </div>
            )
        }
    </>
  )
}

export default Card;
