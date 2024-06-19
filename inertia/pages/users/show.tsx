import type { InferPageProps } from '@adonisjs/inertia/types'
import type UsersController from '#controllers/users_controller'

export default function UserShowPage(props: InferPageProps<UsersController, 'show'>) {
  const { user } = props

  return (
    <div>
      <h1 className="text-2xl font-medium">{user.name}</h1>

      <hr className="my-4" />

      <h2 className="text-gray-800 text-xl">Submissions</h2>

      <ul className="list-disc list-inside">
        {user.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
