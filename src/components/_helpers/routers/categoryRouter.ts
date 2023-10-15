import router from "@/router"

export const routeToCategoryPage = ((value: string): void => {
  router.push({
    name: 'category',
    params: { id: value },
  })
})