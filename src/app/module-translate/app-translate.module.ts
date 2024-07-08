import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

// Loader Factory
const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');


// Compiler Factory
const httpCompilerFactory = ()=> new TranslateMessageFormatCompiler();

// translate Compiler
const translateCompiler : Provider={
  provide: TranslateCompiler,
  useFactory: httpCompilerFactory,
}

// translate Loader
const translateLoader : Provider={
  provide: TranslateLoader,
  useFactory: httpLoaderFactory,
  deps: [HttpClient]
}

@NgModule({

})
export class AppTranslateModule { 
  static forRoot() : ModuleWithProviders<AppTranslateModule>{
    return TranslateModule.forRoot({
      loader: translateLoader,
      compiler: translateCompiler
    });
  }


  static forChild() : ModuleWithProviders<AppTranslateModule>{
    return TranslateModule.forRoot({
      loader: translateLoader,
      compiler: translateCompiler,
      isolate: false
    });
  }
}
