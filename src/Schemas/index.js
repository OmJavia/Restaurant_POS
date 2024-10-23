import * as Yup from 'yup'

 export const entryFormSchema = Yup.object({
    id: Yup.string().required('Required'),
    barcode: Yup.string().required('Required'),
    product_name: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    weight: Yup.number().required('Required').positive('Must be a positive number'),
    quantity: Yup.number().required('Required').integer('Must be an integer').min(1, 'Must be at least 1'),
    mrp: Yup.number().required('Required').positive('Must be a positive number'),
    cost_price: Yup.number().required('Required').positive('Must be a positive number'),
    selling_price: Yup.number().required('Required').positive('Must be a positive number').min(Yup.ref('cost_price'), 'Selling price must be greater than cost price'),
  });