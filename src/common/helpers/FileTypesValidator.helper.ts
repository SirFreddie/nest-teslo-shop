import { FileValidator } from '@nestjs/common';
import { IFile } from '@nestjs/common/pipes/file/interfaces';

export type FileTypesValidatorOptions = {
  fileType: string[];
};

export class FileTypesValidator extends FileValidator<
  FileTypesValidatorOptions,
  IFile
> {
  buildErrorMessage(): string {
    return `Validation failed (expected types are ${this.validationOptions.fileType})`;
  }

  isValid(file?: IFile): boolean {
    if (!this.validationOptions) {
      return true;
    }

    return (
      !!file &&
      'mimetype' in file &&
      !!this.validationOptions.fileType.includes(file.mimetype)
    );
  }
}
