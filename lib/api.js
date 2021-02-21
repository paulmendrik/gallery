
import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

const sliderFields = `
  _id,
  title,
  slide,
  order
`
export async function getAllSlides() {
  const results = await client
    .fetch(`*[_type == "slider"] | order(order) {${sliderFields}}`);
  return results;
}

const galleryFields = `
  _id,
  name,
  image,
  thumb,
  slug,
  details,
  order
`

export async function getAllImages() {
  const results = await client
    .fetch(`*[_type == "gallery"] | order(order) {${galleryFields}}`);
  return results;
}

const printFields = `
  _id,
  name,
  image,
  thumb,
  slug,
  details,
  order
`

export async function getAllPrints() {
  const results = await client
    .fetch(`*[_type == "prints"] | order(order) {${printFields}}`);
  return results;
}

const gicleeFields = `
  _id,
  name,
  image,
  thumb,
  slug,
  details,
  order
`

export async function getAllGicleePrints() {
  const results = await client
    .fetch(`*[_type == "giclee"] | order(order) {${printFields}}`);
  return results;
}


const aboutFields = `
  _id,
  title,
  image,
  content
`
export async function getAboutPage() {
  const results = await client
    .fetch(`*[_type == "about"]{${aboutFields}}`);
  return results;
}


const contactFields = `
  _id,
  title,
  image,
  content
`
export async function getContactPage() {
  const results = await client
    .fetch(`*[_type == "contact"]{${aboutFields}}`);
  return results;
}

const exhibitionsFields = `
  _id,
  title,
  image,
  content,
  slider,
  "slide": slider[0].asset->url
`
export async function getExhibitionsPage() {
  const results = await client
    .fetch(`*[_type == "exhibitions"]{${exhibitionsFields}}`);
  return results;
}

