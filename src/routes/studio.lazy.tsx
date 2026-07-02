import { createLazyFileRoute } from '@tanstack/react-router'
import { NextStudio } from 'next-sanity/studio'
import config from '../../sanity.config'

export const Route = createLazyFileRoute('/studio')({
  component: StudioComponent,
})

function StudioComponent() {
  return (
    <div className="w-full h-screen min-h-screen bg-black">
      <NextStudio config={config} />
    </div>
  )
}
