import { CardTransUI } from "@/components"
const index = () => {
  return (
    <section>
        <div className="title">
            <h1 className="text-white font-bold text-[25px]">View Transaction</h1>
            <div className="container">
                <CardTransUI className="mt-5">
                    <h1>Card Transaction UI</h1>
                </CardTransUI>
            </div>
        </div> 
    </section>
  )
}

export default index