import DefaultPageWrapper from "../../components/DefaultPageWrapper/DefaultPageWrapper.component"
import AddSongForm from "../../components/forms/AddSongForm/AddSongForm.component"

const AddSongPage = () => {

    return (
        <DefaultPageWrapper title="Nuovo Brano">
            <AddSongForm />
        </DefaultPageWrapper>
    )
}
export default AddSongPage