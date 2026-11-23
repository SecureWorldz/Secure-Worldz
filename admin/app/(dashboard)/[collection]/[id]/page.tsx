import ResourceForm from '@/components/resource-form'

export default async function EditDocumentPage({
  params,
}: {
  params: Promise<{ collection: string; id: string }>
}) {
  const { collection, id } = await params
  return <ResourceForm collection={collection} id={id} />
}
