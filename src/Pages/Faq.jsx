import CategoryList from "../Components/Faq/CategoryList"
import DefaultButton from "../Components/DefaultButton"

function Faq() {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Aide / FAQ</h1>
      <CategoryList />
      <DefaultButton name="test" color="btn-secondary"/>
    </div>
  )
}

export default Faq
