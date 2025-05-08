import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta:Meta<Props> = {
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

export const Tertiary: Story = {
    // Definir aqui nuestros argumentos
    args: {
        label: 'Tertiary label',
        color: 'text-tertiary'
    }
}

export const CustomFontColor: Story = {
    // Definir aqui nuestros argumentos
    args: {
        size: 'h1',
        label: 'CustomFontColor label',
        fontColor: 'black'
    }
}

export const CustomBackgroundColor: Story = {
    // Definir aqui nuestros argumentos
    args: {
        size: 'h1',
        label: 'CustomBackgroundColor label',
        fontColor: 'white',
        backgroundColor: 'black'
    }
}

