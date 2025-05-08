import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'UI/Labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {control: 'inline-radio'}
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    // Definir aqui nuestros argumentos
    args: {
        label: 'Basic label'
    }
}

export const AllCaps: Story = {
    // Definir aqui nuestros argumentos
    args: {
        label: 'AllCaps label',
        allCaps: true
    }
}

export const Secondary: Story = {
    // Definir aqui nuestros argumentos
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
}

export const CustomColor: Story = {
    // Definir aqui nuestros argumentos
    args: {
        label: 'CustomColor label',
        fontColor: '#FAFA12'
    }
}