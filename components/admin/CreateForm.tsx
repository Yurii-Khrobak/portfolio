import MyInput from '../UI/MyInput'
import MyButton from '../UI/MyButton'
import FileInput from '../UI/FileInput'

export default function CreateForm({
	project,
	setProject,
	createProject,
	setImg,
}) {
	return (
		<form className='form' onSubmit={createProject}>
			<MyInput
				value={project.name}
				onChange={e => setProject({ ...project, name: e.target.value })}
				require='true'
				type='text'
				placeholder='Name...'
			/>
			<MyInput
				value={project.link}
				onChange={e => setProject({ ...project, link: e.target.value })}
				require='true'
				type='text'
				placeholder='Link...'
			/>
			<FileInput onChange={e => setImg(e.target.files[0])} accept='image/*' />
			<MyButton>Create</MyButton>
		</form>
	)
}
