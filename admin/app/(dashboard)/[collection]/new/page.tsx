import ResourceForm from '@/components/resource-form'

export default async function NewDocumentPage({
  params,
}: {
  params: Promise<{ collection: string }>
}) {
  const { collection } = await params
  return <ResourceForm collection={collection} />
}
