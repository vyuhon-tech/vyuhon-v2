export default function SectionLabel({ children, dark = false }) {
  return <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>{children}</span>
}
