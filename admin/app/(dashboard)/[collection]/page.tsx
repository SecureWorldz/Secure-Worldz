import ResourceList from '@/components/resource-list'

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ collection: string }>
}) {
  const { collection } = await params
  return <ResourceList collection={collection} />
}
